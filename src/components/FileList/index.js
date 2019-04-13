import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { mdCheckCircle, mdError, mdLink, MdLink } from 'react-icons/md';


import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
    <Container>
        <li>
            <FileInfo>
                <Preview src="http://localhost:3000/files/aaa16f03403fcb7a7f58bb1c1e3e03ae-2.jpg" />
                <div>
                    <strong> profile.png</strong>
                    <span>64kb <button onclick={() => { }}> Excluir </button></span>
                </div>
            </FileInfo>
            <div>
                <CircularProgressbar
                    styles={{
                        root: { width: 24 },
                        path: { stroke: '#7159c1' }
                    }}
                    strokeWidth={10}
                    percentege={60}
                />

                <a
                    href="http://localhost:3000/files/aaa16f03403fcb7a7f58bb1c1e3e03ae-2.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                </a>

                <mdCheckCircle size={24}  color="#78e5d5"/>
                <mdError size={24}  color="#e57878"/>

            </div>

        </li>
    </Container>
);

export default FileList;
