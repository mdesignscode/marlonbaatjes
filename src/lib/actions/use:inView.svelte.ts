export function inView(node: HTMLElement, callback: () => void) {
        $effect(() => {
                const observer = new IntersectionObserver(
                        ([entry]) => {
                                if (entry.isIntersecting) callback();
                        },
                        { threshold: 0.3 }
                );
                observer.observe(node);

                return () => {
                        observer.unobserve(node);
                };
        });
}

