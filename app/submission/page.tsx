import Actions from "@/components/submission/actions";
import Form from "@/components/submission/form";
import Title from "@/components/submission/title";

export default function Submission() {
  return (
    <section className="mx-auto my-0 max-w-225 px-6 py-8">
      <Title />
      <div className="hr" />
      <Form />
      <Actions />
    </section>
  );
}
