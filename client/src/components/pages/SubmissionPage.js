import React, { Component } from 'react'

export default class SubmissionPage extends Component {
    constructor() {
        super();

        //Set state to anticipate fetch
        this.state = {
            student_submissions: {},
            submitted_videos: {}
        };
    }
    
    componentDidMount() {
        //Fetch from server
        fetch('/api/submissions')
            .then((res) => {
                if (res.ok) return res.json();
            })
            .then((data) => {
                console.log("Fetched data from the server: ", data);
                let {student_submissions, submitted_videos} = data;
                this.setState({
                    student_submissions,
                    submitted_videos
                });
            })
            .catch((err) => {
                console.log("Internal error while trying to fetch data from the server: " + err.stack);
            });
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
