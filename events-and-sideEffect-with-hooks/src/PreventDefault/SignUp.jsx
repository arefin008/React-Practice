export default function SignUp() {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault(alert("submitting"))}>
        <input style={{ marginTop: "10px" }} type="text" />
      </form>
    </div>
  );
}
