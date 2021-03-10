import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, recorrencia: 0 }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, recorrencia: 0 }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');

            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Quer cadastrar uma nova cobrança?"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome da Empresa"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />

                        <Input
                            name="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />

                        <Textarea
                            name="bio"
                            label="Descrição"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a empresa</legend>

                        <Select
                            name="subject"
                            label="Ramo"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Academia', label: 'Academia' },
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

                        <Input
                            name="cost"
                            label="Custo do plano"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Planos disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                                + Novo plano
              </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Selecione o plano"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Gold' },
                                            { value: '1', label: 'Silver' },
                                            { value: '2', label: 'Bronze' },
                                            // { value: '3', label: 'Quarta-feira' },
                                            // { value: '4', label: 'Quinta-feira' },
                                            // { value: '5', label: 'Sexta-feira' },
                                            // { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Select
                                        name="recorrencia"
                                        label="Recorrência"
                                        value={scheduleItem.recorrencia}
                                        onChange={e => setScheduleItemValue(index, 'recorrencia', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Mensal' },
                                            { value: '1', label: 'Trimestral' },
                                            { value: '2', label: 'Anual' },
                                            // { value: '3', label: 'Quarta-feira' },
                                            // { value: '4', label: 'Quinta-feira' },
                                            // { value: '5', label: 'Sexta-feira' },
                                            // { value: '6', label: 'Sábado' },
                                        ]}
                                    />

                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
                        <button type="submit">
                            Salvar cadastro
            </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;