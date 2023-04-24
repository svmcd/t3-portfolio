export const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 25.0 * vDisplacement * u_intensity * sin(vUv.y * 0.0 + u_time);
    vec3 color = vec3(abs(vUv - 0.5) * 1.0  * (1.0 - distort), 1.0);
    float grayscale = (color.r + color.g + color.b) / 30.0;
    gl_FragColor = vec4(vec3(grayscale), 0.01);
}
`;
