export default function UsernamePage() {
  return (
    <div>
      <p>What do you want to be called?</p>
      <form>
        <input type="text" name="username" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
