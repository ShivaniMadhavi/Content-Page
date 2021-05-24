import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContentListing } from '../Api';
import Header from '../../header/components/Header.js'
import InfiniteScroll from 'react-infinite-scroller';


class ContentListingPage extends Component {

    constructor(props) {
        super(props);
        this.state={
            isFetching:false,
            ContentData:[],
            ContentTitle:'',
            page:1,
            Search:'',
        }
        this.loadContentData = this.loadContentData.bind(this);
    
    }

    componentDidMount()
    {
        this.props.fetchContentListing(this.state.page).then((data)=>{
            // console.log(data.ContentData)
            if(data.ContentData.page)
            {
                this.setState({
                    ContentData:data.ContentData.page['content-items'].content,
                    ContentTitle:data.ContentData.page.title
                })

            }
            else
            {
                this.setState({
                    ContentData:[],
                    ContentTitle:'',
                })
            }
        })

        window.addEventListener('scroll', this.loadContentData)
        window.addEventListener('touchmove', this.loadContentData)
        // $(window).on('touchmove',infiniteScroll);
           
    }

    loadContentData=page=>{
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            if(this.state.page<=2)
            {
                this.props.fetchContentListing(this.state.page +1).then((data)=>{
                                // console.log(data.ContentData)
                                this.setState({ ContentData: this.state.ContentData.concat(data.ContentData.page['content-items'].content) })
                                this.setState({page:this.state.page + 1})
                })
            }
           
         }
        
    }

    onSearch(value)
    { 
        this.setState({ Search: value });
        
    }

    render() {

        let {ContentData,ContentTitle,Search}=this.state
            if(Search!='' && ContentData)
            {
                ContentData = ContentData.filter(function(data) {
                    return data.name.toLowerCase().indexOf(Search.toLowerCase()) != -1; // returns true or false

                });

            }

            var style = {
                height: '1000px',
              }
        
            
        return ( 
        
            <section class="bg-black">
                <Header
                    ContentTitle={ContentTitle}
                    onChange={this.onSearch.bind(this)}
                />
                <section class="pt-20 px-4 bg-black h-full" >
                        {
                            ContentData.length===0 ?
                            <div class="md:container md:mx-auto h-screen text-white">
                                <p class="font-light text-left text-xs mt-52 h-full mb-full 	">
                                    NO Data Found
                                </p>
                            </div> : ""
                        }
                    <div class="grid gap-1 grid-cols-3 bg-black">
                        {ContentData.map((data, index) => {
                                    var imagename=`./Slices/${data['poster-image']}`;
                                    return(
                                    <InfiniteScroll
                                        pageStart={0}
                                        loadMore={this.loadContentData}
                                        threshold='20%'
                                        hasMore={true}
                                        loader={<h4>Loading ... </h4>}
                                    >
                                        <div class="md:w-3/3 px-1 mb-4">
                                            <img class=" shadow-md h-40 w-full" src={imagename}  alt="" 
                                                onError={(e)=>{e.target.onerror = null; e.target.src="./Slices/placeholder_for_missing_posters.png"}}
                                            />
                                            <p class="font-light text-left text-xs  text-white	">
                                                {data.name.length > 12 ?
                                                    `${data.name.substring(0, 12)}...` : data.name
                                                 }
                                            </p>
                                        </div>
                                    </InfiniteScroll>
                                    )
                                })
                        }
                    </div>
                </section>
            </section>
            

        )
    }
}

const mapStateToProps = state => ({
    ContentData: state.ContentDataReducers
});


export default connect(mapStateToProps, { fetchContentListing })(ContentListingPage);

// export default ContentListingPage


