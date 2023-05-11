const Course = ({ course }) => (
  <>
    <h2>{course.name}</h2>
    <Content parts={course.parts} />
  </>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} partName={part.name} partEx={part.exercises} />
      ))}
      <Sum parts={parts} />
    </>
  );
};

const Part = ({ partName, partEx }) => (
  <p>
    {partName} {partEx}
  </p>
);

const Sum = ({ parts }) => (
  <p>
    total of {parts.map((part) => part.exercises).reduce((s, p) => s + p, 0)}{" "}
    exercises
  </p>
);

export default Course;
