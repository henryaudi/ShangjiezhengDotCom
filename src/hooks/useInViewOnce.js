import { useInView } from 'react-intersection-observer';

export function useInViewOnce(options = {}) {
  return useInView({ threshold: 0.1, triggerOnce: true, ...options });
}
