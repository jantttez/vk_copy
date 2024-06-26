import { RefObject, useEffect } from "react";

export function useObserve(ref: RefObject<HTMLDivElement>, callback: () => void, isLoading: boolean, hasMore: boolean) {
  useEffect(() => {
    if (isLoading) return;
    if (!hasMore) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [isLoading, hasMore, ref, callback]);
}
