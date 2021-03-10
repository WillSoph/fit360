import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import ListaFaturas from '../../components/ListaFaturas';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [recorrencia, setRecorrencia] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                recorrencia,
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Lista de faturas">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Plano"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Corrida', label: 'Corrida' },
                            { value: 'Musculacao', label: 'Musculação' },
                            { value: 'Zumba', label: 'Zumba' },
                            // { value: 'Biologia', label: 'Biologia' },
                            // { value: 'Ciências', label: 'Ciências' },
                            // { value: 'Educação física', label: 'Educação física' },
                            // { value: 'Física', label: 'Física' },
                            // { value: 'Geografia', label: 'Geografia' },
                            // { value: 'História', label: 'História' },
                            // { value: 'Matemática', label: 'Matemática' },
                            // { value: 'Português', label: 'Português' },
                            // { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Selecione o status"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Pago' },
                            { value: '1', label: 'A Pagar' },
                            { value: '2', label: 'Cancelado' },
                            // { value: '0', label: 'Domingo' },
                            // { value: '1', label: 'Segunda-feira' },
                            // { value: '2', label: 'Terça-feira' },
                            // { value: '3', label: 'Quarta-feira' },
                            // { value: '4', label: 'Quinta-feira' },
                            // { value: '5', label: 'Sexta-feira' },
                            // { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Select
                        name="recorrencia"
                        label="Recorrencia"
                        // value={time}
                        value={recorrencia}
                        onChange={(e) => { setRecorrencia(e.target.value) }}
                        options={[
                            { value: '0', label: 'Mensal' },
                            { value: '1', label: 'Trimestral' },
                            { value: '2', label: 'Anual' },
                            // { value: '0', label: 'Domingo' },
                            // { value: '1', label: 'Segunda-feira' },
                            // { value: '2', label: 'Terça-feira' },
                            // { value: '3', label: 'Quarta-feira' },
                            // { value: '4', label: 'Quinta-feira' },
                            // { value: '5', label: 'Sexta-feira' },
                            // { value: '6', label: 'Sábado' },
                        ]}
                    />

                    <button type="submit">
                        Buscar
          </button>
                </form>
            </PageHeader>

            <main>
                <ListaFaturas />
            </main>
        </div>
    )
}

export default TeacherList;