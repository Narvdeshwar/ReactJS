const employees = [
  {
    id: 1,
    employeeName: "John Doe",
    email: "test@test.com",
    password: "password123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Complete Onboarding",
        taskDescription:
          "Finish all onboarding tasks including documentation and initial training.",
        taskDate: "2024-11-01",
        category: "HR",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit Personal Documents",
        taskDescription: "Submit all required personal documents to HR.",
        taskDate: "2024-10-25",
        category: "HR",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Read Company Policies",
        taskDescription: "Read and understand all company policies.",
        taskDate: "2024-11-03",
        category: "Compliance",
      },
    ],
    taskCount: {
      pending: 1,
      completed: 1,
      failed: 0,
      inProgress: 1,
    },
  },
  {
    id: 2,
    employeeName: "Alice Smith",
    email: "alicesmith@example.com",
    password: "alice@2024",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Client Records",
        taskDescription:
          "Ensure all client records are updated by the end of the month.",
        taskDate: "2024-11-10",
        category: "Admin",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Complete Monthly Report",
        taskDescription: "Prepare and submit the monthly report.",
        taskDate: "2024-10-30",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Finalize Budget Plan",
        taskDescription: "Submit budget plan for Q4.",
        taskDate: "2024-10-29",
        category: "Finance",
      },
    ],
    taskCount: {
      pending: 1,
      completed: 1,
      failed: 1,
      inProgress: 0,
    },
  },
  {
    id: 3,
    employeeName: "Michael Lee",
    email: "michaellee@example.com",
    password: "mikePass456",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Schedule and attend meeting with Client ABC.",
        taskDate: "2024-11-05",
        category: "Client Relations",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit Project Proposal",
        taskDescription: "Finalize and submit project proposal.",
        taskDate: "2024-10-28",
        category: "Projects",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare slides for upcoming client meeting.",
        taskDate: "2024-11-04",
        category: "Client Relations",
      },
    ],
    taskCount: {
      pending: 1,
      completed: 1,
      failed: 0,
      inProgress: 1,
    },
  },
  {
    id: 4,
    employeeName: "Jessica Brown",
    email: "jessicabrown@example.com",
    password: "secureJess2024",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Coordinate and lead weekly team meeting.",
        taskDate: "2024-11-02",
        category: "Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Employee Review",
        taskDescription: "Conduct annual performance reviews.",
        taskDate: "2024-10-27",
        category: "HR",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Team Feedback",
        taskDescription: "Collect feedback from team members.",
        taskDate: "2024-11-03",
        category: "Management",
      },
    ],
    taskCount: {
      pending: 1,
      completed: 1,
      failed: 0,
      inProgress: 1,
    },
  },
];


const admin = [{ id: 123, name: "test", password: 123 }];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const getEmployee = JSON.parse(localStorage.getItem("employees"));
  const getAdmin = JSON.parse(localStorage.getItem("admin"));
  return { getEmployee, getAdmin };
};

