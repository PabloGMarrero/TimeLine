import React, { Component } from 'react'
import './CreateCard.css'

export class CreateCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            year: undefined,
            description: undefined,
            category: undefined,
            url: undefined
        }
    }

    handleYearCard = (event) => this.setState({ year: event.target.value }) && console.log(this.state.year)
    handleDescriptionCard = (event) => this.setState({ descriptiongt: event.target.value }) && console.log(this.state.description)
    handleCategoryCard = (event) => this.setState({ category: event.target.value }) && console.log(this.state.category)
    handleUrlCard = (event) => this.setState({ url: event.target.value }) && console.log(this.state.url)

    render = () => {
        return (
            <div className="main-container-create-card">
                <p>Sección donde podrás crear tus propias cartas!</p>

                <div className="create-card-content">
                    <div className="data-card-content">
                        <p>Name</p>
                        <input type="text" id="description" name="description" onChange={this.handleDescriptionCard} />
                        <p>Year</p>
                        <input type="text" id="year" name="year" onChange={this.handleYearCard} />
                        <p>Category</p>
                        <input type="text" id="category" name="category" onChange={this.handleCategoryCard} />
                        <p>Url</p>
                        <input type="text" id="url" name="url" onChange={this.handleUrlCard} />
                    </div>
                    <div className="button-create-card">
                        <button type="submit" id="createCard">Crear carta</button>
                    </div>
                </div>
            </div>
        )
    }

}