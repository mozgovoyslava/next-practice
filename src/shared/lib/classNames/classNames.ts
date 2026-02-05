type ClassValue =
    | string
    | number
    | null
    | undefined
    | boolean
    | ClassValue[]
    | Record<string, boolean | undefined | null | number>;

export function classNames(...args: ClassValue[]): string {
    const result: string[] = [];

    const process = (value: ClassValue): void => {
        if (!value) return;

        if (typeof value === 'string' || typeof value === 'number') {
            result.push(String(value));
            return;
        }

        if (Array.isArray(value)) {
            value.forEach(process);
            return;
        }

        if (typeof value === 'object') {
            for (const key in value) {
                if (value[key]) result.push(key);
            }
        }
    };

    args.forEach(process);

    return result.join(' ');
}
