import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink end to="/qa-training/" className={({ isActive }) => isActive ? 'active' : ''}>
                Calculator
            </NavLink>
            <NavLink to="/qa-training/history" className={({ isActive }) => isActive ? 'active' : ''}>
                History
            </NavLink>
        </nav>
    );
};