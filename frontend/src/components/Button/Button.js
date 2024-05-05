export default function Button({ children, ...props }) { 
  return (
    <button
      type="button"
      className="inline-flex rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      {...props}
    >
      {children}
    </button>
  );
}