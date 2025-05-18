// ALLOWED POSITION, WHERE TOASTER APPEAR
export type PositionType = "bottom-left" | "bottom-right" | "top-left" | "top-right";



// PROPERTISE OF TOASTER
export interface ToasterProps {
    type: "success" | "info" | "warning" | "error";
    message: string;
    duration: number;
    animation?: "fade" | "pop" | "slide";
    onClose: () => void
}

// RETURN TYPE OF THE TOASTER HOOK
export interface UseToasterReturn {
    ToasterComponent: JSX.Element;
    triggerToast: (ToasterProps: ToasterProps) => void;
}