import { useRef, useCallback } from "react"

export const useInfiniteScroll = (fetchMore, hasMore, isLoading) => {
  const observer = useRef()

  const lastItemRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          if (hasMore) {
            fetchMore()
          }
        }
      })

      if (node) observer.current.observe(node)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoading, hasMore]
  )

  return [lastItemRef]
}
