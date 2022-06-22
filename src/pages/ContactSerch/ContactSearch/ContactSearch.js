import React, { useState, useEffect, useContext } from "react";
import DataTable from "../../../componants/comman/DataTable";
import TextField from '@mui/material/TextField';
import CsvDownloader from 'react-csv-downloader';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TuneIcon from '@mui/icons-material/Tune';
import DownloadIcon from '@mui/icons-material/Download';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import PopUpModel from "../../../componants/comman/PopUpModel";
import AddPopUpModel from "../../../componants/comman/AddPopUpModel";
import { AuthContext } from "../../../componants/Context/AuthContext";
import { GET_ALL_CONTACTS } from "../../../componants/Context/Types";
import { DownloadPopUpModel } from "../../../componants/comman/DownloadPopUpModel";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { CSVLink, CSVDownload } from "react-csv";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import DropDownFilter from "../../../componants/comman/DropDownFilter";
import { NotificationManager } from 'react-notifications';



const ContactSearchManagement = (props) => {
    const { dispatch, setFilter, setAllContacts } = useContext(AuthContext);

    const [toggle, setToggle] = useState(false);
    const [columns, setcolumns] = useState("");
    const [checkBoxColumn, setCheckBoxColumn] = useState(["_id", "contact_name", "title", "phone_number", "email", "address", "name", "Action"])
    const [addlistmodel, setaddlistmodel] = useState(false);
    const [savelist, setsavelist] = useState(false);
    const [download, setdownload] = useState(false);
    const [rowsForDownload, setrowsForDownload] = useState([])

    useEffect(() => {
        const columnary = [
            { field: "_id", headerName: "ID", width: 50 },
            { field: "contact_name", headerName: "CONTACTS", width: 130 },
            { field: "title", headerName: "TITLE", width: 130 },
            { field: "phone_number", headerName: "PHONE", width: 130 },
            { field: "email", headerName: "EMAIL", width: 90 },
            { field: "address", headerName: "LOCATION", width: 220 },
            { field: "name", headerName: "INDUSTRY", width: 370 },
            { field: "action", headerName: "ACTIONS", width: 150 },
        ]
        setcolumns(columnary)
    }, [])


    const manageColumn = (e, title) => {
        let filtered = [...checkBoxColumn];
        if (e.target.checked) {
            filtered.push(title);
        } else {
            filtered = filtered.filter((d) => d !== title);
        }
        setCheckBoxColumn(filtered);
    };

    const hideShow = () => {
        setToggle(!toggle);
        if (addlistmodel) {
            setaddlistmodel(false);
        }
    };


    const setRowsForDownload = (data) => {
        setrowsForDownload(data)
    }
    const handleClearSearch = () => {
        setFilter("");
        setAllContacts("");
        dispatch({
            type: GET_ALL_CONTACTS,
            setAllContacts: setAllContacts,
            page: 1,
        });
    };


    //   const managedownload = (data) => {
    //   console.log("🚀 ~ file: ContactSearch.js ~ line 75 ~ managedownload ~ data", data)
    //     let newRow = {...downloadrow}
    //     newRow[data.id] = data

    //     setdownload(newRow);
    //     return
    //   }


    return (
        <><h6 className="text-start mx-5 mt-2 d-flex justify-content-between"><div><b>253,65</b> records Found</div> <Button variant="outlined" onClick={handleClearSearch}>
            Clear Search
        </Button></h6>
            <div className="m-1">
                <DataTable columns={columns} checkBoxColumn={checkBoxColumn} setRowsForDownload={setRowsForDownload} />
            </div>
            {toggle == true &&
                <>
                    <Tippy
                        content={
                            <div className="bg-light text-black border">
                                {columns.length && columns.map((d) => {
                                    if (d.field !== "_id" && d.field !== "action") {
                                        return (<div className="d-flex flex-row align-items-center"><Checkbox onClick={(e) => { manageColumn(e, d.field) }} defaultChecked={checkBoxColumn.includes(d.field)} />{d.headerName}</div>)
                                    }
                                })}
                            </div>
                        }
                        placement='left'
                        trigger='mouseenter'
                        interactive={true}
                        className="floatingBtn-Tippy columnTippy"
                    >
                        <Box sx={{ '& > :not(style)': { m: 1 } }} className="floating-btn4">
                            <Fab color="primary" aria-label="add">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-split" viewBox="0 0 16 16">
                                    <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm8.5-1v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8.5zm-1 0H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2z" />
                                </svg>
                            </Fab>
                        </Box>
                    </Tippy>

                    <Tippy
                        content="Add List"
                        placement='left'
                        trigger='mouseenter'
                        className="floatingBtn-Tippy"
                    >
                        <Box sx={{ '& > :not(style)': { m: 1 } }} className="floating-btn3" onClick={() => { setaddlistmodel(true) }}>
                            <Fab color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>

                        </Box>

                    </Tippy>



                    <Tippy
                        content="Save Search"
                        placement='left'
                        trigger='mouseenter'
                        className="floatingBtn-Tippy"
                    >
                        <Box sx={{ '& > :not(style)': { m: 1 } }} className="floating-btn2" onClick={() => { setaddlistmodel(true) }}>
                            <Fab color="primary" aria-label="add">
                                <DownloadDoneIcon />

                            </Fab>
                        </Box>
                    </Tippy>

                    <Tippy
                        content="Download"
                        placement='left'
                        trigger='mouseenter'
                        className="floatingBtn-Tippy"
                    >
                        <Box sx={{ '& > :not(style)': { m: 1 } }} className="floating-btn1" onClick={() => { setdownload(true) }}>
                            <Fab color="primary" aria-label="add">
                                <DownloadIcon />


                            </Fab>
                        </Box>
                    </Tippy>
                </>
            }
            <Tippy
                content="Mor Items"
                placement='left'
                trigger='mouseenter'
                className="floatingBtn-Tippy"
            >
                <Box sx={{ '& > :not(style)': { m: 1 } }} className="floating-btn">
                    <Fab color="primary" aria-label="add" onClick={hideShow}>
                        <TuneIcon />
                    </Fab>
                </Box>
            </Tippy>
            <AddPopUpModel open={addlistmodel} close={() => { setaddlistmodel(false) }} title={"Save    List"} buttonname={"Save List"} />
            <AddPopUpModel open={savelist} close={() => { setsavelist(false); }} title={"Search"} buttonname={<BookmarkAddedIcon />} />
            <DownloadPopUpModel open={download} close={() => { setdownload(false) }} title={"Download"} rows={rowsForDownload} buttonname={
                <div className="download-icon"><svg className="m-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                    <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>Download</div>} />
                

        </>
    )
}

export default ContactSearchManagement;
