import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Accordion, Card} from 'react-bootstrap';

const ColorBar = observer((props) => {
    const {products} = useContext(Context)
    return (
        <Card>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Цвета</Accordion.Header>
            </Accordion.Item>
            <Accordion.Collapse eventKey="1">
                <Card.Body>
                    {products.colors.map((color) => (
                        <li style={{'listStyleType': 'none'}} key={color.slug}>
                            <input type="checkbox"
                                   checked={color.isChecked}
                                   name="colors" value={color.slug} onChange={props.change}/>
                            <span>{color.name}</span>
                        </li>
                    ))}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
})

export default ColorBar