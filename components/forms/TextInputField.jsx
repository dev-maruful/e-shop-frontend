import ErrorByFieldName from "./ErrorByFieldName";

const defaultLabelClassNames = "block text-sub-small font-medium text-gray-800";
const defaultClassNames =
  "mt-1 lg:mt-0 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm";

function TextInputField(props) {
  const {
    type = "text",
    name,
    label = "",
    labelClassName = defaultLabelClassNames,
    placeholder = "",
    className = defaultClassNames,
    value,
    onChange = () => {},
    errors = {},
  } = props;
  return (
    <div>
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value === null ? "" : value}
        onChange={onChange}
        {...props}
      />
      <ErrorByFieldName field={name} errors={errors} />
    </div>
  );
}

export default TextInputField;
