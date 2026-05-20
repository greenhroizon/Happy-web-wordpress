"use client";

import { useEffect, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  Table, TableBody, TableCell, TableHead,
  TableHeader, TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card, CardContent, CardDescription,
  CardHeader, CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useRouter } from "next/navigation";
import {
  CalendarDays, Users, RefreshCw, Search,
  MoreVertical, Wifi, MapPin, Phone, Mail,
} from "lucide-react";
import { BOOKINGS_KEY, useBookings } from "@/hooks/useBookings";

export default function BookingsDashboard() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [paymentFilter, setPaymentFilter] = useState<"all" | "paid" | "pending" | "failed">("all");
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/Admin/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const {
    data: bookings = [],
    isLoading,
    error,
  } = useBookings();

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return bookings.filter((b) => {
      const matchesSearch =
        b.fullName.toLowerCase().includes(q) ||
        b.email.toLowerCase().includes(q) ||
        b.selectedService.toLowerCase().includes(q) ||
        b.selectedGuide.toLowerCase().includes(q);

      const matchesPayment =
        paymentFilter === "all" || b.paymentStatus === paymentFilter;

      return matchesSearch && matchesPayment;
    });
  }, [search, paymentFilter, bookings]);

  const totalOnline = useMemo(
    () => bookings.filter((b) => b.sessionType === "Online").length,
    [bookings]
  );

  const totalOffline = useMemo(
    () => bookings.filter((b) => b.sessionType === "Offline").length,
    [bookings]
  );

  // ✅ Early return AFTER all hooks
  if (!isMounted || !isAuthenticated || !token) {
    return null;
  }

  const handleRefresh = async () => {
    setRefreshing(true);
    await queryClient.invalidateQueries({ queryKey: BOOKINGS_KEY });
    setRefreshing(false);
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Bookings Dashboard
        </h1>
        <p className="text-zinc-400 mt-1 text-sm">
          Manage and view all session bookings
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">Total Bookings</CardTitle>
            <Users className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{bookings.length}</div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">Online Sessions</CardTitle>
            <Wifi className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-400">{totalOnline}</div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">Offline Sessions</CardTitle>
            <MapPin className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-400">{totalOffline}</div>
          </CardContent>
        </Card>
      </div>

      {/* Table Card */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <CardTitle className="text-white text-lg">All Bookings</CardTitle>
              <CardDescription className="text-zinc-500">
                {filtered.length} of {bookings.length} records
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
                <Input
                  placeholder="Search bookings..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 w-56 focus-visible:ring-zinc-600"
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 capitalize"
                  >
                    {paymentFilter === "all" ? "Payment Status" : paymentFilter}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-zinc-800 border-zinc-700 text-zinc-200">
                  {["all", "paid", "pending", "failed"].map((status) => (
                    <DropdownMenuItem
                      key={status}
                      onClick={() => setPaymentFilter(status as typeof paymentFilter)}
                      className={`hover:bg-zinc-700 cursor-pointer capitalize ${
                        paymentFilter === status ? "text-white font-medium" : ""
                      }`}
                    >
                      {status === "all" ? "All" : status}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="outline"
                size="icon"
                onClick={handleRefresh}
                disabled={refreshing}
                className="border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {error && (
            <div className="text-red-400 text-sm bg-red-950/40 border border-red-800 rounded-md px-4 py-3 mb-4">
              {(error as any)?.response?.data?.message || "Failed to fetch bookings"}
            </div>
          )}

          <div className="rounded-md border border-zinc-800 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-zinc-800 hover:bg-transparent">
                  <TableHead className="text-zinc-400 font-medium">Client</TableHead>
                  <TableHead className="text-zinc-400 font-medium">Service</TableHead>
                  <TableHead className="text-zinc-400 font-medium">Guide</TableHead>
                  <TableHead className="text-zinc-400 font-medium">Session</TableHead>
                  <TableHead className="text-zinc-400 font-medium">Payment Status</TableHead>
                  <TableHead className="text-zinc-400 font-medium">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Preferred Date
                    </div>
                  </TableHead>
                  <TableHead className="text-zinc-400 font-medium">Booked At</TableHead>
                  <TableHead className="w-10" />
                </TableRow>
              </TableHeader>

              <TableBody>
                {isLoading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <TableRow key={i} className="border-zinc-800">
                      {Array.from({ length: 7 }).map((_, j) => (
                        <TableCell key={j}>
                          <Skeleton className="h-4 w-full bg-zinc-800" />
                        </TableCell>
                      ))}
                      <TableCell />
                    </TableRow>
                  ))
                ) : filtered.length === 0 ? (
                  <TableRow className="border-zinc-800">
                    <TableCell colSpan={8} className="text-center py-12 text-zinc-500">
                      No bookings found
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((booking) => (
                    <TableRow
                      key={booking._id}
                      onClick={() => router.push(`/Admin/dashboard/${booking._id}`)}
                      className="border-zinc-800 hover:bg-zinc-800/50 transition-colors cursor-pointer"
                    >
                      <TableCell>
                        <div className="font-medium text-zinc-100">{booking.fullName}</div>
                        <div className="flex items-center gap-1 text-xs text-zinc-500 mt-0.5">
                          <Mail className="h-3 w-3" />
                          {booking.email}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-zinc-500">
                          <Phone className="h-3 w-3" />
                          {booking.phoneNumber}
                        </div>
                      </TableCell>

                      <TableCell className="text-zinc-300">{booking.selectedService}</TableCell>
                      <TableCell className="text-zinc-300">{booking.selectedGuide}</TableCell>

                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            booking.sessionType === "Online"
                              ? "bg-emerald-950 text-emerald-400 border-emerald-800 hover:bg-emerald-950"
                              : "bg-amber-950 text-amber-400 border-amber-800 hover:bg-amber-950"
                          }
                        >
                          {booking.sessionType === "Online" ? (
                            <Wifi className="h-3 w-3 mr-1" />
                          ) : (
                            <MapPin className="h-3 w-3 mr-1" />
                          )}
                          {booking.sessionType}
                        </Badge>
                      </TableCell>

                      <TableCell>
                        {booking.paymentStatus ? (
                          <Badge
                            variant="outline"
                            className={
                              booking.paymentStatus === "paid"
                                ? "bg-emerald-950 text-emerald-400 border-emerald-800 hover:bg-emerald-950"
                                : booking.paymentStatus === "pending"
                                ? "bg-yellow-950 text-yellow-400 border-yellow-800 hover:bg-yellow-950"
                                : "bg-red-950 text-red-400 border-red-800 hover:bg-red-950"
                            }
                          >
                            {booking.paymentStatus}
                          </Badge>
                        ) : (
                          <span className="text-zinc-600 text-xs">—</span>
                        )}
                      </TableCell>

                      <TableCell className="text-zinc-300 text-sm">
                        {formatDate(booking.preferredDateTime)}
                      </TableCell>

                      <TableCell className="text-zinc-500 text-xs">
                        {formatDate(booking.createdAt)}
                      </TableCell>

                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-700"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-zinc-800 border-zinc-700 text-zinc-200">
                            <DropdownMenuItem
                              className="hover:bg-zinc-700 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(booking.email);
                              }}
                            >
                              Copy Email
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="hover:bg-zinc-700 cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(booking.phoneNumber);
                              }}
                            >
                              Copy Phone
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}