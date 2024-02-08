import React, { type ErrorInfo, type ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError (error: Error): any {
        // Update state so the next render will show the fallback UI.
        console.log('error message in ErrorBoundary getDerivedStateFromError ', error.message);
        return { hasError: true };
    }

    // componentDidCatch (error: Error, info: ErrorInfo): void {
    componentDidCatch (error: Error, errorInfo: ErrorInfo): any {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        // logErrorToMyService(error, info.componentStack);
        console.log('error message in ErrorBoundary componentDidCatch ', error, errorInfo);
    }

    render (): any {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // return <Suspense fallback={'error from ErrorBoundary'}><PageError/></Suspense>;
            return (
                <Suspense fallback={''}>
                    <ErrorPage/>
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
