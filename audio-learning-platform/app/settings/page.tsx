'use client';

import { useState } from 'react';
import Card from '@/src/components/ui/Card';
import Button from '@/src/components/ui/Button';
import { User, Volume2, Bell, Moon, Globe, Save } from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Профиль
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    
    // Аудио настройки
    autoPlay: false,
    playbackSpeed: 1.0,
    volume: 80,
    
    // Уведомления
    emailNotifications: true,
    pushNotifications: false,
    lessonReminders: true,
    
    // Интерфейс
    darkMode: false,
    language: 'ru',
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Здесь будет логика сохранения настроек
    console.log('Сохранение настроек:', settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
  