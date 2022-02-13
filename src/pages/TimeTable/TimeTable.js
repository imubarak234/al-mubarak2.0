import React from 'react';
// Import Components
import { Row, Col, Card, Media } from "react-bootstrap";
//Import Data Table
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPencilAlt, faPlus, faTrash } from '@fortawesome/fontawesome-free-solid';

import Img1 from '../../assets/img/profiles/avatar-01.jpg';

const data = [
    { 
        id: 'PRE2309',
        name: 'Aaliyah',
        class: '10',
        subject: 'English',
        startTime: '10:00 AM',
        endTime: '01:00 PM',
        date: '23 Apr 2020',
        action: ''
    },
    { 
        id: 'PRE2209',
        name: 'Malynne',
        class: '1',
        subject: 'Botony',
        startTime: '10:00 AM',
        endTime: '01:00 PM',
        date: '23 Apr 2020',
        action: ''
    },
    { 
        id: 'PRE2213',
        name: 'Levell Scott',
        class: '9',
        subject: 'Biology',
        startTime: '01:00 PM',
        endTime: '04:00 PM',
        date: '26 Nov 2020',
        action: ''
    },
    { 
        id: 'PRE2143',
        name: 'Minnie',
        class: '8',
        subject: 'Science',
        startTime: '01:00 PM',
        endTime: '04:00 PM',
        date: '18 Sep 2020',
        action: ''
    },
    { 
        id: 'PRE2009',
        name: 'Lois A',
        class: '7',
        subject: 'History',
        startTime: '01:00 PM',
        endTime: '04:00 PM',
        date: '23 Jul 2020',
        action: ''
    },
    { 
        id: 'PRE2431',
        name: 'Calvin',
        class: '2',
        subject: 'Biology',
        startTime: '10:00 AM',
        endTime: '01:00 PM',
        date: '15 Oct 2020',
        action: ''
    },
    { 
        id: 'PRE1534',
        name: 'Vincent',
        class: '6',
        subject: 'Botony',
        startTime: '10:00 AM',
        endTime: '01:00 PM',
        date: '02 Jun 2020',
        action: ''
    },
    { 
        id: 'PRE2153',
        name: 'Kozma  Tatari',
        class: '12',
        subject: 'Mathematics',
        startTime: '10:00 AM',
        endTime: '01:00 PM',
        date: '23 Apr 2020',
        action: ''
    },
];

const columns = [
    {
        name: 'ID',
        selector: 'id',
        sortable: true,
    },
    {
        name: 'Name',
        sortable: true,

        cell: row => <Media className="user-dt"><a><img src={Img1} className="avatar-img rounded-circle avatar avatar-sm mr-2" /></a><Media.Body><a>{row.name}</a></Media.Body></Media>
    },
    {
        name: 'Class',
        selector: 'class',
        sortable: true,
    },
    {
        name: 'Subject',
        selector: 'subject',
        sortable: true,
    },
    {
        name: 'Start Time',
        selector: 'startTime',
        sortable: true,
    },
    {
        name: 'End Time',
        selector: 'endTime',
        sortable: true,
    },
    {
        name: 'Date',
        selector: 'date',
        sortable: true,
    },
    {
        name: 'Action',
        selector: 'action',
        sortable: true,
        cell: () => <div className="d-flex"><a href="/edit-time-table" className="btn btn-sm bg-success-light mr-2">
        <FontAwesomeIcon icon={faPencilAlt} /> </a> <a href="#" className="btn btn-sm bg-danger-light"> <FontAwesomeIcon icon={faTrash} /> </a></div>
    },
];

class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {        
        const tableData = {
            columns,
            data,
        };
        return (
            <div>
                <div className="page-header">
                    <div className="page-header">
                        <Row>
                            <Col className="col">
                                <h3 className="page-title">Time Table</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Time Table</li>
                                </ul>
                            </Col>
                            <Col className="col-auto text-right float-right ml-auto">
                                <a href="#" className="btn btn-outline-primary mr-2"><FontAwesomeIcon icon={faDownload} /> Download</a>
                                <a href="/add-time-table" className="btn btn-primary"><FontAwesomeIcon icon={faPlus} /></a>
                            </Col>
                        </Row>
                    </div>
                </div>

                <Card>
                    <DataTableExtensions
                        {...tableData}
                    >
                        <DataTable
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
                </Card>
            </div>
        )
    }
}
export { TimeTable };