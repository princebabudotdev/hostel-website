import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";

export default function ToastContainer({ toasts, removeToast }) {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const colors = {
    success: "border-green-500 text-green-600",
    error: "border-red-500 text-red-600",
    warning: "border-yellow-500 text-yellow-600",
    info: "border-blue-500 text-blue-600",
  };

  return (
    <div className="fixed top-5 right-5 z-[9999] space-y-3">
      {toasts.map((toast) => {
        const Icon = icons[toast.type];

        return (
          <div
            key={toast.id}
            className={`flex items-center gap-3 bg-white shadow-lg border-l-4 px-4 py-3 rounded-lg min-w-[250px] ${colors[toast.type]}`}
          >
            <Icon size={18} />

            <p className="text-sm flex-1">{toast.message}</p>

            <button onClick={() => removeToast(toast.id)}>
              <X size={16} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
