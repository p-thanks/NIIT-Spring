export default function ErrorInput({ message }) {
  return message && <p style={{ color: "red" }}>{message}</p>;
}
