import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Accordion, Card} from 'react-bootstrap';

const TagBar = observer((props) => {
    const {products} = useContext(Context)
    return (
        <Card>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Категории</Accordion.Header>
            </Accordion.Item>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    {products.tags.map((tag) => (
                        <li style={{'listStyleType': 'none'}} key={tag.slug}>
                            <input type="checkbox"
                                   checked={tag.isChecked}
                                   name="tags" value={tag.slug} onChange={props.change}/>
                            <span>{tag.name}</span>
                        </li>
                    ))}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
})

export default TagBar