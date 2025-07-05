const SingleBookSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 animate-pulse">
      <div className="p-6 rounded-xl shadow-md border dark:border-neutral-800 bg-white dark:bg-neutral-900">
        <div className="space-y-4">
          {/* Title and Availability */}
          <div className="flex items-center justify-between">
            <div className="h-8 w-1/3 rounded bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-6 w-20 rounded bg-neutral-300 dark:bg-neutral-700" />
          </div>

          {/* Author */}
          <div>
            <div className="h-4 w-16 rounded bg-neutral-300 dark:bg-neutral-700 mb-1" />
            <div className="h-6 w-1/2 rounded bg-neutral-300 dark:bg-neutral-700" />
          </div>

          {/* Genre and ISBN */}
          <div className="flex flex-wrap gap-4">
            <div className="h-5 w-1/4 rounded bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-5 w-1/3 rounded bg-neutral-300 dark:bg-neutral-700" />
          </div>

          {/* Copies */}
          <div className="h-5 w-1/4 rounded bg-neutral-300 dark:bg-neutral-700" />

          {/* Divider */}
          <div className="h-px w-full bg-neutral-300 dark:bg-neutral-700 my-4" />

          {/* Description */}
          <div>
            <div className="h-5 w-1/4 rounded bg-neutral-300 dark:bg-neutral-700 mb-2" />
            <div className="h-4 w-full rounded bg-neutral-300 dark:bg-neutral-700 mb-1" />
            <div className="h-4 w-11/12 rounded bg-neutral-300 dark:bg-neutral-700 mb-1" />
            <div className="h-4 w-3/4 rounded bg-neutral-300 dark:bg-neutral-700" />
          </div>

          {/* Borrow Button */}
          <div className="h-10 w-full rounded bg-neutral-300 dark:bg-neutral-700 mt-6" />
        </div>
      </div>
    </div>
  );
};

export default SingleBookSkeleton;
