//import logo from './logo.svg';
//import './App.css';
import DataTable from "react-data-table-component"
import { useState, useEffect } from "react"

function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [perPage, setPerPage] = useState(10)
    //const [submitClicked, setSubmitClicked] = useState(false);
    const [show, setShow] = useState(false);

    const columns = [
        {

            name: "In Market Date",
            selector: (row) => row.userId,
            width: "120px",
            wrap: true
        },
        {
            name: "Topic/Title",
            selector: (row) => row.title,
            wrap: true
        },
        {
            name: "DM Number",
            selector: (row) => row.title,
            wrap: true
        },
        {
            name: "Document ID",
            selector: (row) => row.title,
            wrap: true
        },
        {
            name: "Meeting Contact",
            selector: (row) => row.title,
            wrap: true
        },
        {
            name: "Reference",
            selector: (row) => (row.completed ? "Yes" : "No"),
            wrap: true
        },
    ]

    useEffect(() => {
        fetchTableData()
    }, [])
    /*async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        const formData = {
            name: event.target.name.value,
            number: event.target.number.value,
            docnumber: event.target.docnumber.value
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const users = await response.json();
        setData(users);
        setLoading(false);
        setSubmitClicked(true);
    }*/
    const handleSubmit = (e) => {
        e.preventDefault();
        setShow(true);
    };
    async function fetchTableData() {
        setLoading(true)
        //const URL = "https://jsonplaceholder.typicode.com/todos"
        //const response = await fetch(URL)
        const response = await fetch('https://awstestspringboot.s3.us-east-2.amazonaws.com/test/test.json')

        const users = await response.json()
        setData(users)
        setLoading(false)
    }

  return (
      <div className="wrapper">
        <h1> Member Marketing Tool </h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Member Number:</p>
              <input name="name" />
            </label>
              <label>
                  <p>DM Number:</p>
                  <input name="number" />
              </label>
              <label>
                  <p>Document ID:</p>
                  <input name="docnumber" />
              </label>
          </fieldset>

            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </form>

          <DataTable
              //title="Data"
              columns={columns}
              data={show ? data : []}
              progressPending={loading}
              pagination
          />

          {/*{submitClicked && (
              <DataTable
                  columns={columns}
                  data={data}
                  progressPending={loading}
                  pagination
              />
          )}*/}


      </div>

  )
}

export default App;
