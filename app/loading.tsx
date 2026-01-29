export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="mb-4 flex justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-indigo-500"></div>
        </div>
        
        {/* Loading text */}
        <p className="animate-pulse text-lg text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
