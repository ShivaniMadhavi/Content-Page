import React, { Component } from 'react';
import back from '../../../Assets/Slices/Back.png'
import search from '../../../Assets/Slices/search.png'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleOnSearch = this.handleOnSearch.bind(this);
        
    }

    handleSearchClick() {
        this.setState({
            active: !this.state.active
        });
    }

    handleOnSearch(event){
        this.props.onChange(event.target.value)
    }

    render() {

        return (
            <nav class="bg-nav-bar h-16	my-0 shadow-md fixed w-full">
                <img class="float-left h-4 w-4 inline-block m-5	" src={back} />
            
                <p class=" float-left font-light text-2xl m-4 ml-0 mt-15 text-white inline-block">
                    {this.props.ContentTitle}
                </p>
                
                <img class="float-right h-4 w-4 inline-block m-5  search-icon cursor-pointer " onClick={this.handleSearchClick} src={search} />
             
                {this.state.active ?
                    <div class="container mx-auto transition ease-in duration-500 ">
                        <input id="searchfield" type="search" placeholder="Search..." autofocus="autofocus" onChange={this.handleOnSearch} class="w-full text-white-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"/>
                    </div> :''
                }
            
            </nav>
            
        )
    }
}

export default Header


