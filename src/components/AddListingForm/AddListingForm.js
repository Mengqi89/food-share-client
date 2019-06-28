import React, { Component } from 'react'
import ListApiService from '../../services/list-api-service'
import { withRouter } from 'react-router-dom'

class AddListingForm extends Component {
    state = {
        title: '',
        summary: '',
        type: '',
        contact: '',
        address: '',
        zip: '',
        username: parseInt(this.props.myUserId)
    }

    handleAddSuccess = (listingId) => {
        const { history } = this.props
        history.push(`/list/${listingId}`)
    }

    handleChange = event => {
        const name = event.target.name
        this.setState({
            [name]: event.target.value
        })
    }
    handleAdd = event => {
        event.preventDefault()
        const newListing = this.state
        ListApiService.postListing(newListing)
            .then(listing => listing.id)
            .then(listingId => this.handleAddSuccess(listingId))
            .catch(res => {
                console.log('error caught')
                this.setState({ error: res.error })
            })
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleAdd(event)} >
                <div>
                    <label htmlFor='listing-title'>Title: </label>
                    <input id='listing-title' name='title' type='text' placeholder='five tomatoes' required onChange={this.handleChange} />

                </div>
                <div>
                    <label htmlFor='listing-summary'>Summary: </label>
                    <textarea id='listing-summary' name='summary' rows='10' onChange={this.handleChange} />
                </div>
                <div className='options'>
                    <div>Select listing type</div>
                    <div className='radio-button'>
                        <input type='radio' id='vegetable' name='type' value='vegetable' onChange={this.handleChange} />
                        <label htmlFor='vegetable'>vegetable</label>
                    </div>

                    <div className='radio-button'>
                        <input type='radio' id='fruit' name='type' value='fruit' onChange={this.handleChange}></input>
                        <label htmlFor='fruit'>fruit</label>
                    </div>

                </div>
                <div>
                    <label htmlFor='contact'>Email/Cell</label>
                    <input id='contact' name='contact' type='text' required onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <input id='address' name='address' type='text' required onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor='zip'>Zip</label>
                    <input id='zip' name='zip' type='text' required onChange={this.handleChange} />
                </div>
                <button type='submit'>Share!</button>
            </form >
        )
    }
}

export default withRouter(AddListingForm)

//1 class component
//2 state to hold all data
//3 onChange to send all data to state
//4 onSubmit to send the data somewhere