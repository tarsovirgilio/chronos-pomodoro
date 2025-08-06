import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
  // type: 'text' | 'number' | 'search'; // union type
} & React.ComponentProps<'input'>; //intersection

export function DefaultInput({
  id,
  labelText,
  type,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {Boolean(labelText) && labelText && (
        <label htmlFor={id}>{labelText}</label>
      )}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
