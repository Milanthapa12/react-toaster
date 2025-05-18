type PositionType = "bottom-left" | "bottom-right" | "top-left" | "top-right";
interface ToasterProps {
    type: "success" | "info" | "warning" | "error";
    message: string;
    duration: number;
    animation?: "fade" | "pop" | "slide";
    onClose: () => void;
}
interface UseToasterReturn {
    ToasterComponent: JSX.Element;
    triggerToast: (ToasterProps: ToasterProps) => void;
}

declare const useToaster: (position?: PositionType) => UseToasterReturn;

export { useToaster as default };
