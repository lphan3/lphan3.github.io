window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('sterling-card-container').innerHTML = `
    <div class="profile-card-sterling" onclick="window.open('Sterling/Sterling.html', '_blank')" tabindex="0" 
    style="width: 180px; 
        border: 1px solid #ddd; 
        border-radius: 8px; padding: 10px; 
        font-family: monospace; 
        text-align: center; 
        box-shadow: 0 2px 5px rgba(0,0,0,0.05); 
        margin: 10px; 
        cursor: pointer; transition: 
        transform 0.2s cubic-bezier(.4,2,.6,1), 
        box-shadow 0.2s; outline: none; 
        border: 1px solid #ccc;
        border-color: #644d3c">

      <img src="Sterling/Sterlin.jpg" alt="A handsome gentleman" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; margin-bottom: 8px;">
      <h3 style="margin: 6px 0 2px; font-size: 14px; color:#644d3c;">Sterling Dorsey</h3>
      <p style="margin: 0; font-size: 12px; color: #666;color:#644d3c;">IT Intern</p>
      <p style="margin: 0 0 8px; font-size: 11px; color:#644d3c;">i.c.stars Milwaukee</p>
      <p style="font-size: 11px; color: #333; margin-bottom: 6px;">Aspiring Software Developer | Audio Engineer | Relentless Learner | Passionate About Tech & Sound</p>
      <p style="font-size: 11px; margin: 0 0 4px;"><strong>Skills:</strong> Python • Collaboration • Signal Flow </p>
      <p style="font-size: 11px; margin: 0 0 8px;"><strong>Project:</strong> AI Enabled Cross Document Comparison Tool </p>
      <div style="display: flex; justify-content: center; gap: 8px;">
        <a href="https://www.linkedin.com/in/sterling-d-85688187/" target="_blank" style="padding: 2px; display: inline-flex; align-items: center;" onclick="event.stopPropagation();">
          <img src="image/linkedin.webp" alt="LinkedIn" style="width: 16px; height: 16px;">
        </a>
        <a href="https://github.com/HingleMcBingle" target="_blank" onclick="event.stopPropagation();">
          <img src="image/github.webp" alt="GitHub" style="width: 16px; height: 16px;">
        </a>
      </div>
    </div>
  `;
});