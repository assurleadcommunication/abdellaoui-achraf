import React from 'react';

export const ServiceCardSkeleton = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col animate-pulse">
      <div className="h-56 bg-slate-200 relative">
        <div className="absolute top-4 right-4 w-20 h-6 bg-slate-300 rounded-full" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-300" />
          <div className="space-y-2">
            <div className="w-16 h-3 bg-slate-300 rounded" />
            <div className="w-32 h-5 bg-slate-300 rounded" />
          </div>
        </div>
      </div>
      <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="w-full h-4 bg-slate-200 rounded" />
          <div className="w-5/6 h-4 bg-slate-200 rounded" />
          <div className="w-2/3 h-4 bg-slate-200 rounded" />
        </div>
        <div className="space-y-2 pt-4">
          <div className="w-full h-3 bg-slate-200 rounded" />
          <div className="w-4/5 h-3 bg-slate-200 rounded" />
          <div className="w-3/4 h-3 bg-slate-200 rounded" />
        </div>
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div className="w-24 h-4 bg-slate-200 rounded" />
          <div className="w-28 h-8 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const BlogPostSkeleton = () => {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-slate-200 flex flex-col animate-pulse">
      <div className="h-60 bg-slate-200 relative">
        <div className="absolute top-5 left-5 w-24 h-6 bg-slate-300 rounded-full" />
        <div className="absolute bottom-3 right-3 w-16 h-5 bg-slate-300 rounded" />
      </div>
      <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <div className="flex gap-4">
            <div className="w-20 h-3 bg-slate-200 rounded" />
            <div className="w-24 h-3 bg-slate-200 rounded" />
          </div>
          <div className="w-full h-6 bg-slate-200 rounded" />
          <div className="w-4/5 h-6 bg-slate-200 rounded" />
          <div className="w-full h-4 bg-slate-100 rounded mt-2" />
          <div className="w-3/4 h-4 bg-slate-100 rounded" />
        </div>
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="w-16 h-5 bg-slate-100 rounded-full" />
            <div className="w-16 h-5 bg-slate-100 rounded-full" />
            <div className="w-16 h-5 bg-slate-100 rounded-full" />
          </div>
          <div className="w-full h-11 bg-slate-200 rounded-full" />
        </div>
      </div>
    </div>
  );
};
