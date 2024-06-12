const Header = ({ courses }) => {
  return (
    <div>
      {courses.map((course, i) => {
        return (
          <div key={course.name}>
            <h1 key={i}>{course.name}</h1>
            <Content key={course.exercises} courses={courses} />
            <Total key={course.id} course={course} />
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

export default Header;
