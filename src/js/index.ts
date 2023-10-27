export function isNotNull<T>(value: T): value is NonNullable<T> {
    return value !== null && value !== undefined;
}

export function requireNotNull<T>(value: T, reason?: string): NonNullable<T> {
    if (isNotNull(value)) {
        return value;
    }
    throw new Error(reason ?? "value must not be null");
}