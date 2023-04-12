import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Accordion, Card, Form} from 'react-bootstrap';

const TagBar = observer(() => {
    const {products} = useContext(Context)
    // console.log(product.tags)
    return (
        <Card>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Категории</Accordion.Header>
            </Accordion.Item>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    {products.tags.map((tag) => (
                        <Form.Check
                            type="checkbox"
                            label={tag.name}
                            style={{cursor: 'pointer'}}
                            checked={tag.id === products.selectedTag.id}
                            onClick={() => products.setSelectedTags(tag)}
                            key={tag.id}
                        />
                    ))}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
})

export default TagBar