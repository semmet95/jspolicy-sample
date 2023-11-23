export function denyOnErrors(...errors: Array<string[]>) {

    print("all errors")
    print(errors)

    const combinedErrors: string[] = errors.reduce((accumulator, value) => accumulator.concat(value), []);

    if (combinedErrors.length > 0) {
        deny("Request denied because of the following errors:\n-" + combinedErrors.join("\n- "));
    }
}

export function enforceType<T>(input: any): T | undefined {
    return input as unknown as T;
}

export function array<T>(array: T[] | undefined): T[] {
    return !array ? [] : array;
}
