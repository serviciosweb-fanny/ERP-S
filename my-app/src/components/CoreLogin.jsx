import React, { useMemo, useState } from "react";
import coreLogo from "../assets/imagenes/core.png";
import { EyeIcon, IconEmpleado, IconCliente, IconAliado, ClientsIcon, DocumentIcon, LanguageIcon } from "./iconos";



const roles = [
    { key: "seer", label: "Empleado SEER", icon: <IconEmpleado /> },
    { key: "cliente", label: "Cliente", icon: <IconCliente /> },
    { key: "aliado", label: "Aliado", icon: <IconAliado /> },
];


function cx(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function CoreLogin() {
    const [lang, setLang] = useState("es");
    const [role, setRole] = useState("seer");
    const [email, setEmail] = useState("servicios_web@caast.net");
    const [password, setPassword] = useState("••••••••••••");
    const [showPassword, setShowPassword] = useState(false);

    const t = useMemo(() => {
        const es = {
            welcome: "Bienvenido a CORE",
            subtitle: "Sistema de Gestión Empresarial",
            email: "Correo electrónico",
            pass: "Contraseña",
            login: "Iniciar Sesión",
            forgot: "¿Olvidaste tu contraseña?",
            featuresTitle: "CORE",
            featuresSubtitle: "Sistema de Gestión Empresarial",
            f1Title: "Clientes",
            f1Desc: "Gestiona todos tus clientes en un solo lugar",
            f2Title: "Servicios",
            f2Desc: "Control total de servicios y tickets",
            rights: "© 2024 CORE. Todos los derechos reservados.",
            language: "English",
        };
        const en = {
            welcome: "Welcome to CORE",
            subtitle: "Business Management System",
            email: "Email",
            pass: "Password",
            login: "Sign In",
            forgot: "Forgot your password?",
            featuresTitle: "CORE",
            featuresSubtitle: "Business Management System",
            f1Title: "Clients",
            f1Desc: "Manage all your clients in one place",
            f2Title: "Services",
            f2Desc: "Full control of services and tickets",
            rights: "© 2024 CORE. All rights reserved.",
            language: "Español",
        };
        return lang === "es" ? es : en;
    }, [lang]);

    return (
        <div className="min-h-screen w-full bg-white">
            {/* Top-right language */}
            <div className="absolute right-6 top-5 z-10">
                <button
                    onClick={() => setLang((v) => (v === "es" ? "en" : "es"))}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur hover:bg-white"
                    aria-label="Toggle language"
                >
                    <LanguageIcon className="h-5 w-5" />
                    {t.language}
                </button>
            </div>

            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
                {/* Left gradient panel */}
                <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#2885f7] via-[#5aa3f7] to-[#7bb8fa]" />

                    <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
                    <div className="absolute -right-20 top-40 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

                    <div className="relative flex h-full flex-col px-10 py-12 text-white">
                        {/* Logo */}
                        <div className="flex items-center ">
                            <img
                                src={coreLogo}
                                alt="CORE"
                                className="h-30 object-contain"
                            />
                        </div>


                        {/* Middle content */}
                        <div className="mt-24">
                            <div className="text-4xl font-bold leading-tight">{t.featuresTitle}</div>
                            <div className="mt-2 text-lg opacity-90">
                                {t.featuresSubtitle}</div>

                            <div className="mt-12 space-y-10">
                                <Feature
                                    title={t.f1Title}
                                    desc={t.f1Desc}
                                    icon={
                                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/15">
                                            <ClientsIcon className="h-5 w-5" />

                                        </div>
                                    }
                                />
                                <Feature
                                    title={t.f2Title}
                                    desc={t.f2Desc}
                                    icon={
                                        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 ring-1 ring-white/15">
                                            <DocumentIcon className="h-5 w-5" />
                                        </div>
                                    }
                                />
                            </div>
                        </div>

                        <div className="mt-auto text-xs opacity-80">{t.rights}</div>
                    </div>
                </div>

                {/* Right panel */}
                <div className="relative flex items-center justify-center bg-gray-50 px-6 py-12">
                    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-7 shadow-lg">
                        <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">{t.welcome}</div>
                            <div className="mt-1 text-sm text-gray-500">{t.subtitle}</div>
                        </div>

                        {/* Role tabs */}
                        <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl bg-gray-100 p-2">
                            {roles.map((r) => (
                                <button
                                    key={r.key}
                                    onClick={() => setRole(r.key)}
                                    className={cx(
                                        "flex flex-col items-center justify-center gap-1 rounded-lg px-3 py-3 text-xs font-semibold transition",
                                        role === r.key
                                            ? "bg-gray-900 text-white shadow"
                                            : "bg-white text-gray-700 hover:bg-gray-50"
                                    )}
                                    type="button"
                                >
                                    <span className="text-base leading-none">{r.icon}</span>
                                    <span className="leading-none">{r.label}</span>
                                </button>
                            ))}
                        </div>

                        <form
                            className="mt-6 space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Aquí conectas tu API / autenticación
                                alert(`Login: ${email} | Role: ${role}`);
                            }}
                        >
                            <div>
                                <label className="text-sm font-medium text-gray-700">{t.email}</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="name@company.com"
                                    className="mt-2 w-full rounded-lg border border-gray-200 bg-sky-50/50 px-3 py-3 text-sm text-gray-900 outline-none ring-sky-200 focus:ring-4"
                                    type="email"
                                    autoComplete="email"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">{t.pass}</label>
                                <div className="relative mt-2">
                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full rounded-lg border border-gray-200 bg-sky-50/50 px-3 py-3 pr-12 text-sm text-gray-900 outline-none ring-sky-200 focus:ring-4"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((v) => !v)}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md px-2 py-2 text-gray-500 hover:bg-gray-100"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        <EyeIcon open={showPassword} className="h-5 w-5" />

                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-2 w-full rounded-lg bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200"
                            >
                                {t.login}
                            </button>

                            <button
                                type="button"
                                className="w-full text-center text-sm font-medium text-gray-700 hover:underline"
                                onClick={() => alert("Recuperación de contraseña")}
                            >
                                {t.forgot}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Feature({ title, desc, icon }) {
    return (
        <div className="flex items-start gap-4">
            {icon}
            <div>
                <div className="text-base font-semibold">{title}</div>
                <div className="mt-1 text-sm opacity-90">{desc}</div>
            </div>
        </div>
    );
}
