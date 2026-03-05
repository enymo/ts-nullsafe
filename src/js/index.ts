export function isNotNull<T>(value: T): value is NonNullable<T> {
    return value !== null && value !== undefined;
}

export function requireNotNull<T>(value: T, message?: string): NonNullable<T> {
    if (isNotNull(value)) {
        return value;
    }
    throw new Error(message ?? "value must not be null");
}

export function assertNotNull<T>(value: T, message?: string): asserts value is NonNullable<T> {
    requireNotNull(value, message);
}