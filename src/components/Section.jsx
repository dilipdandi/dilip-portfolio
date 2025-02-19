import "../css/section.css";
export default function Section({ children }) {
  return (
    <section className="first">
      <div id="stars3"></div>
      {children}
    </section>
  );
}