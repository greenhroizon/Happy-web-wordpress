export default function ResourcesLoading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#f3efe8]">
      <div className="flex flex-col items-center gap-4 text-[#3f5c4a]">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#3f5c4a]/20 border-t-[#3f5c4a]" />
        <p className="text-sm md:text-base font-medium">Loading resources...</p>
      </div>
    </div>
  );
}
