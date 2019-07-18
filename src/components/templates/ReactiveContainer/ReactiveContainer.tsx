import * as React from "react";
import IframesContainer from '../../layout/IframesContainer/IframesContainer';
import AddBlock from '../../molecules/AddBlock/AddBlock';


export default class ReactiveContainer extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        this.state = {
            link : "",
        	Iframes : [
                {
                    "name" : "Laptop",
                    "width" : "1440",
                    "height" : "900"
                },
                {
                    "name" : "Tablet",
                    "width" : "768",
                    "height" : "1024"
                },
                {
                    "name" : "Mobile",
                    "width" : "375",
                    "height" : "667"
                }
            ]
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.removeBlock = this.removeBlock.bind(this);
    }

    handleAdd(w:any,h:any,n:any) {
        const newBlock = {
            "name": n,
            "width": w,
            "height": h
        }
        this.setState((prevState: any) => ({
            Iframes: [...prevState.Iframes, newBlock]
        }));
    }
    handleLink(link:any) {
        console.log(link);
        this.setState({
            link: link
        });
    }
    removeBlock(blockNr: any) {
        console.log("blockNr",blockNr);
        // this.setState({
        //     Iframes: this.state.Iframes.filter((_: any, i: any) => i !== blockNr)
        // });
        this.setState((prevState: any) => ({
          Iframes: [...prevState.Iframes.slice(0,blockNr), ...prevState.Iframes.slice(blockNr+1)]
        }));
        console.log(this.state);
    }
    public render() {
        return (
            <div className="container">
                <AddBlock addBlock={this.handleAdd} changeLink={this.handleLink}/>
                <IframesContainer removeBlock={this.removeBlock} link={this.state.link} Iframes={this.state.Iframes} />
            </div>
        );
    }
}