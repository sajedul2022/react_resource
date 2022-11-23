import React, {Component} from 'react';

// Function Based Component

    // function Header(head) {
    //     return (
    //         <div class="p-5 bg-primary text-white text-center">
    //             <h1>{head.brand}</h1>
    //             <p>{head.slogan}</p>
    //         </div>
    //     )
    // }


// Class Based Component

class Header extends Component{
    constructor(head){
        super(head);
        this.head = head;
    }
    render(){
        return (
                    <div class="p-5 bg-primary text-white text-center">
                        <h1>{this.head.brand}</h1>
                        <p>{this.head.slogan}</p>
                    </div>
                )
    }
}

export default Header;