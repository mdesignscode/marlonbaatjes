export function inView(node: HTMLElement, cls: string) {
        $effect(() => {
                const observer = new IntersectionObserver(
                        ([entry]) => {
                                if (entry.isIntersecting) {
                                        node.classList.add(cls);
                                        observer.unobserve(node); // remove to allow once-only trigger
                                }
                        },
                        { threshold: 0.1 }
                );

                observer.observe(node);

                return () => {
                        observer.unobserve(node);
                };
        })
}

