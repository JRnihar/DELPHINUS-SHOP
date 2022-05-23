import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <div className="container mt-5">
                <div>
                    <h3 className='text-center p-2 text-success'> <i>Blog</i> </h3>
                    
                </div>
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>##QUESTION - 1 <span className='text-danger ms-1'> (Difference between javascript and nodejs?)</span></Accordion.Header>
                        <Accordion.Body>
                            Javascript is a programming language . And  Javascript is a programming language.JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.
                            Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. It may run on various platforms including, Windows, Linux, Mac OS, etc. It provides a cross-platform runtime environment with event-driven, non-blocking (asynchronous) I/O for creating highly scalable server-side JavaScript applications.


                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>##QUESTION - 2 <span className='text-danger ms-1'> ( When should you use nodejs and when should you use mongodb?)</span></Accordion.Header>
                        <Accordion.Body>
                            NoSQL databases like MongoDB are a good choice when my data is document-centric and doesn't fit well into the schema of a relational database, when i need to accommodate massive scale, when we are rapidly prototyping, and a few other use cases.Many renowned names such as LinkedIn and Medium are rebuilt on Node.js. An essential combination of nodes is needed to build a backend for a social media networking site. Node.js provides blazing-fast routing with its V8 engine along with secure authentication. Scalability is one of the most significant factors which enriches a social media network.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>##QUESTION - 3 <span className='text-danger ms-1'> (Differences between sql and nosql databases.?)</span></Accordion.Header>
                        <Accordion.Body>
                            In choosing between SQL vs. NoSQL, i wii need to think about what your data looks like, how i will query it, and your scalability needs. <br /><br />
                            From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.

                            Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases.

                            To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems (DBMS) and languages, as well as the situations each is best-suited for, and how the landscape is changing.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;