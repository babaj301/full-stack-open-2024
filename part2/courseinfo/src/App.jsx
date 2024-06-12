const Header = ({ courses }) => {
  return (
    <div>
      {courses.map((course, i) => {
        return (
          <div>
            <h1 key={i}>{course.name}</h1>
            <Content courses={courses} />
            <Total course={course} />
          </div>
        );
      })}
    </div>
  );
};

const Total = ({ course }) => {
  return (
    <div>
      <b>
        total of {""}
        {course.parts.reduce((sum, value) => {
          console.log(value);
          return sum + Number(value.exercises);
        }, 0)}{" "}
        {""}
        exercises
      </b>
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return course.parts.map((part, i) => {
          return <Part key={i} part={part} />;
        });
      })}
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <Header courses={courses} />
    </div>
  );
};

export default App;
