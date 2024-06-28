import { ReactNode } from "react";
import "../styles/Overlay.css"

interface OverlayProps {
    isOpen: boolean;
    onClose: ()=>void;
    children: ReactNode;
}

export default function Overlay({isOpen, onClose, children}: OverlayProps){
    return(
        <>
            {isOpen && (
                <div className="overlay">
                    <div className="overlay-background dark:bg-[rgba(0,0,0,0.8)]" onClick={onClose} />
                    <div className="overlay-container dark:bg-slate-800 dark:hover:bg-slate-900 dark:transition-colors">
                        <div className="overlay-controls">
                            <button
                                className="overlay-close"
                                type="button"
                                onClick={onClose}
                            ></button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}