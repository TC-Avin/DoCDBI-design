import React, { useContext, useEffect, useMemo, useState } from "react";
import DownloadSharpIcon from "@mui/icons-material/DownloadSharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Searchbar from "../comman/Searchbar";
import TablePagination from "@mui/material/TablePagination";
import TableFooter from "@mui/material/TableFooter";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PopUpModel from "./PopUpModel";
import { Card } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import img from "../../assests/image/Login.png";
import { AuthContext } from "../Context/AuthContext";
import { FILTER_CONTACTS, GET_ALL_CONTACTS } from "../Context/Types";
import { Button } from "@mui/material";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const DataTable = (props) => {
  const { dispatch, filter, setFilter, allContacts, setAllContacts } =
    useContext(AuthContext);

  let searchValue = "";
  const [toggle, setToggle] = useState("");
  const [page, setPage] = React.useState(0);
  const [prevPage, setPrevPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [lock, setLock] = useState([]);

  const [selectall, setselectall] = useState([]);
  const [columns, setcolumns] = useState("");
  const [rows, setRows] = useState([])
  const [filteredRows, setfilteredRows] = useState([]);
  const [sortTogle, setsortTogle] = useState(false);

  useMemo(() => {
    console.log(rowsPerPage, page);
    if (allContacts?.length > 0) {
      if (rowsPerPage * (page + 1) == allContacts.length) {
        dispatch({
          type: GET_ALL_CONTACTS,
          setAllContacts: setAllContacts,
          page: prevPage + 1,
        });
        setPrevPage((prev) => prev + 1);
      }
    }
  }, [rowsPerPage, page]);

  useEffect(() => {
    let columnfilter = [];
    props.columns &&
      props.columns.filter((d) => {
        if (props.checkBoxColumn.includes(d.field)) {
          columnfilter.push(d);
        }
      });

    let newRow = []
    allContacts && allContacts.map((data) => {
      let obj = {}
      props.checkBoxColumn.map((val) => {
        obj[val] = data[val]
      })
      newRow.push(obj)
    })
    console.log('props.checkBoxColumn,', props.checkBoxColumn,allContacts?.length && allContacts[0])
    setfilteredRows(newRow)
    setcolumns(columnfilter)
  }, [props.checkBoxColumn, props.columns, allContacts])


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(id, Title, Company, Email, Location, Industry, Action) {
    return { id, Title, Company, Email, Location, Industry, Action };
  }

  const handleClick = (value) => {
    setToggle(value);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (e) => {
    searchValue = e;
  };
  const handleFilter = (key) => {
    switch (key) {
      case "Contacts" || "CONTACTS":
        setFilter((prev) => {
          return { ...prev, contact_name: [searchValue] };
        });
        dispatch({
          type: FILTER_CONTACTS,
          setAllContacts: setAllContacts,
        });
        break;
      case "Title" || "TITLE":
        setFilter((prev) => {
          return { ...prev, title: [searchValue] };
        });
        dispatch({
          type: FILTER_CONTACTS,
          setAllContacts: setAllContacts,
        });
        break;
      case "Phone" || "PHONE":
        setFilter((prev) => {
          return { ...prev, phone_number: [searchValue] };
        });
        dispatch({
          type: FILTER_CONTACTS,
          setAllContacts: setAllContacts,
        });
        break;
      case "Email" || "EMAIL":
        setFilter((prev) => {
          return { ...prev, email: [searchValue] };
        });
        dispatch({
          type: FILTER_CONTACTS,
          setAllContacts: setAllContacts,
        });
        break;
      case "Location" || "LOCATION":
        setFilter((prev) => {
          return { ...prev, address: [searchValue] };
        });
        dispatch({
          type: FILTER_CONTACTS,
          setAllContacts: setAllContacts,
        });
        break;
      case "Industry" || "INDUSTRY":
        setFilter((prev) => {
          return { ...prev, name: [searchValue] };
        });
        dispatch({
          type: FILTER_CONTACTS,
          setAllContacts: setAllContacts,
        });
        break;
    }

    setToggle("");
  };
  const handleClose = () => {
    setToggle("");
  };
  const selectCheckbox = (data, checked) => {
    let allCheck = [...selectall]
    if (data == "all" && checked) { filteredRows.map((d) => { allCheck.push(d._id) }); allCheck.push("all") }
    if (data == "all" && !checked) { allCheck = [] }


    if (allCheck.includes(data) && data !== "all" && !checked) { allCheck = allCheck.filter((d) => d !== data) }
    if (!allCheck.includes(data) && data !== "all" && checked) { allCheck.push(data) }
    if (allCheck.length <= filteredRows.length) {
      allCheck = allCheck.filter(d => d !== "all")
    }

    let rowsfilter = filteredRows.filter((data) => (allCheck.includes(data._id) || allCheck.includes("all")))
    props.setRowsForDownload(rowsfilter)
    setselectall(allCheck);
  }

    const sortRow = (asc, desc, title) => {
      let row = [...filteredRows];
      row.sort((a, b) => a[title] > b[title] ? 1 : -1)
      if (desc) {
        row.sort((a, b) => a[title] < b[title] ? 1 : -1)
      }
      row.map((d, i) => {
        row[i].id = i
      })
      console.log("🚀 ~ file: DataTable.js ~ line 211 ~ sortRow ~ row", row)
      setfilteredRows(row)
      handleClose()
      // setToggle(!toggle)
      setsortTogle(!sortTogle)
    }




    const UnlockFilled = (_id, flag) => {
      setLock([...lock, { _id, flag }]);
    };

    const getAllContacts = () => {
      dispatch({
        type: GET_ALL_CONTACTS,
        setAllContacts: setAllContacts,
        page: 1,
      });
    };

    useEffect(() => {
      getAllContacts();
      setFilter("");
    }, []);

    return (
      <>
        <Card className="table-wrapper ">
          <TableContainer>
          
            <Table sx={{ minWidth: 700 }} aria-label="customized table mediaquery-table-width">
              <TableHead>
                <TableRow>

                  <StyledTableCell align="left" className="table-th pointer mediaquery-table ">
                    <Checkbox {...label} checked={selectall.includes("all")} onClick={(e) => { selectCheckbox("all", e.target.checked) }} />
                  </StyledTableCell>

                  {columns.length ? columns.map((data) => {
                    if (data.headerName !== "ID") {
                      return (<>
                        <StyledTableCell align="left" className="table-th pointer mediaquery-table ">
                          <div className={"d-flex justify-content-between flex-row table-header align-items-center "}>

                            <div className={data.headerName === "INDUSTRY" && "w-100 d-flex justify-content-between"} onClick={() => {
                              data.headerName !== "ACTION" && handleClick(data.field);
                            }}>
                              <span>{data.headerName}{" "}</span>
                              {data.headerName !== "ACTION" && (
                                <>
                                  <KeyboardArrowDownIcon
                                    className="ml-2 mr-5"

                                  />
                                </>
                              )}
                            </div>
                            {data.headerName !== "ACTION" && <div className="divider"></div>}

                          </div>
                        </StyledTableCell>
                      </>)
                    }
                  }) : ""}
                  <PopUpModel
                    open={!(toggle === "") ? true : false}
                    close={() => {
                      handleClose(toggle);
                    }}
                    title={`Search In "${toggle}"`}
                  >
                    <div className="d-flex justify-content-between contact-color mb-3">
                      <h6 className="contact-font-size pointer" onClick={() => { sortRow(true, "", toggle) }}>Sort A to Z</h6>
                      <h6 className="contact-font-size pointer" onClick={() => { sortRow("", true, toggle) }}>Sort Z to A</h6>
                    </div>
                    <p>
                      {!(toggle === "") && (<>
                        <Searchbar handleChange={handleSearchChange} />
                        </>
                      )}
                    </p>
                    <div>
                      <h6 className="d-flex justify-content-between contact-color m-0 pt-2 align-items-center contact-font-size">
                        Clear Filters
                        <Button
                          variant="contained"
                          onClick={() => {
                            handleFilter(toggle);
                          }}
                        >
                          Done
                        </Button>
                      </h6>
                    </div>
                  </PopUpModel>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows?.length && filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    
                    <StyledTableRow key={row.id}>
                      <StyledTableCell align="left" className="table-th mediaquery-table  ">   <Checkbox {...label} checked={selectall.includes(row._id)||selectall.includes("all")} onChange={(e) => { selectCheckbox(row._id, e.target.checked) }} /></StyledTableCell>
                      {row.contact_name == "" ? <StyledTableCell align="left" className="table-th mediaquery-table">-
                      </StyledTableCell>:
                      row.contact_name && <StyledTableCell align="left" className="table-th mediaquery-table  ">
                        <div className="d-flex align-items-center">

                          <img
                            src={img}
                            alt="img"
                            style={{ width: "47px", paddingRight: "5px" }}
                          />
                          <div className="list-threedots">
                            {row.contact_name}
                          </div>
                        </div>


                      </StyledTableCell>}
                      {row.title == "" ? <StyledTableCell align="left" className="table-th mediaquery-table">-
                      </StyledTableCell>:row.title &&  <StyledTableCell align="left" className="table-th mediaquery-table d-flex align-items-center">
                        <img
                          src={img}
                          alt="img"
                          style={{ width: "47px", paddingRight: "5px" }}
                        />
                        <div className="list-threedots">
                          {row.title}
                        </div>
                      </StyledTableCell>}
                      {console.log('row', row)} 

                      {row.phone_number == "" ? <StyledTableCell align="left" className="table-th mediaquery-table">-
                      </StyledTableCell>:row.phone_number&& <StyledTableCell align="left" className="table-th mediaquery-table ">
                        <span
                          onClick={() => {
                            UnlockFilled(row._id, "phone");
                          }}
                          className="text-primary table-filedPhone"
                        >
                          <div className="list-threedots">
                            {lock.filter((d) => d._id == row._id && d.flag == "phone")
                              .length
                              ? row.phone_number
                              : "UNLOCK"}
                          </div>

                        </span>
                      </StyledTableCell>}
                                            
                      {row.email==""?<StyledTableCell align="left" className="table-th mediaquery-table">-
                      </StyledTableCell>:row.email && <StyledTableCell align="left" className="table-th mediaquery-table">
                        <span onClick={() => { UnlockFilled(row._id, "email"); }} className="text-primary  table-filedEmail" >
                          <div className="list-threedots">{lock.filter((d) => d._id === row._id && d.flag === "email").length
                            ? row.email : "UNLOCK"}</div>
                        </span>
                      </StyledTableCell>}

                      {row.address==""?<StyledTableCell align="left" className="table-th mediaquery-table">-
                      </StyledTableCell>:row.address && <StyledTableCell align="left" className="table-th mediaquery-table">
                        <div className="list-threedots">{row.address}</div>
                      </StyledTableCell>}

                      {row.name==""?<StyledTableCell align="left" className="table-th mediaquery-table">
                        -
                      </StyledTableCell>:row.name&& <StyledTableCell align="left" className="table-th mediaquery-table">
                        <div className="list-threedots-industry"> {row.name}</div>
                      </StyledTableCell>}
                     <StyledTableCell align="left" className="table-th pointer mediaquery-download-icon">
                        <DownloadSharpIcon />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TablePagination
                    //  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    colSpan={8}
                    count={allContacts?.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableRow>
              </TableFooter>
            </Table>
          
          </TableContainer>
        </Card>
      </>
    )
  };
  export default DataTable;
